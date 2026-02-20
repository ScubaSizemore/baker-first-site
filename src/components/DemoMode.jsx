import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const DEMO_PAGES = [
  { path: '/', label: 'Home', scrollDuration: 8000 },
  { path: '/about', label: 'About', scrollDuration: 7000 },
  { path: '/services', label: 'Services', scrollDuration: 5000 },
  { path: '/properties', label: 'Properties', scrollDuration: 5000 },
  { path: '/quail-lakes', label: 'Quail Lakes', scrollDuration: 6000 },
  { path: '/contact', label: 'Contact', scrollDuration: 4000 },
];

const PAUSE_BEFORE_SCROLL = 1500;
const PAUSE_AFTER_SCROLL = 1000;

export default function DemoMode() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [status, setStatus] = useState('');
  const [paused, setPaused] = useState(false);
  const animFrameRef = useRef(null);
  const timeoutRef = useRef(null);
  const activeRef = useRef(false);

  // Activate when #demo is in the hash
  useEffect(() => {
    if (window.location.hash === '#demo' && !active) {
      setActive(true);
      activeRef.current = true;
      setPageIndex(0);
      // Clear the hash so it doesn't interfere
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [active]);

  const smoothScrollToBottom = useCallback((duration) => {
    return new Promise((resolve) => {
      const start = window.scrollY;
      const end = document.documentElement.scrollHeight - window.innerHeight;
      const distance = end - start;

      if (distance <= 0) {
        resolve();
        return;
      }

      const startTime = performance.now();

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          resolve();
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    });
  }, []);

  useEffect(() => {
    if (!active || paused) return;

    let cancelled = false;

    async function runPage() {
      const page = DEMO_PAGES[pageIndex];
      if (!page) {
        setStatus('Demo Complete');
        setActive(false);
        activeRef.current = false;
        return;
      }

      setStatus(`Navigating to ${page.label}...`);
      navigate(page.path);
      window.scrollTo(0, 0);

      await new Promise((r) => {
        timeoutRef.current = setTimeout(r, PAUSE_BEFORE_SCROLL);
      });
      if (cancelled) return;

      setStatus(`Viewing ${page.label}`);

      await smoothScrollToBottom(page.scrollDuration);
      if (cancelled) return;

      await new Promise((r) => {
        timeoutRef.current = setTimeout(r, PAUSE_AFTER_SCROLL);
      });
      if (cancelled) return;

      setPageIndex((i) => i + 1);
    }

    runPage();

    return () => {
      cancelled = true;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, pageIndex, paused, navigate, smoothScrollToBottom]);

  const handleStop = () => {
    setActive(false);
    activeRef.current = false;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handlePause = () => setPaused((p) => !p);

  if (!active) return null;

  const progress = ((pageIndex / DEMO_PAGES.length) * 100).toFixed(0);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        padding: '16px 20px',
        minWidth: '260px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: paused ? '#FBBF24' : '#EF4444',
              animation: paused ? 'none' : 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#2B2B2B' }}>
              {paused ? 'Paused' : 'Demo Mode'}
            </span>
          </div>
          <span style={{ fontSize: '11px', color: '#9AA0A6', fontFamily: 'monospace' }}>{progress}%</span>
        </div>
        <div style={{ width: '100%', height: '6px', backgroundColor: '#F7F7F8', borderRadius: '999px', overflow: 'hidden', marginBottom: '12px' }}>
          <div style={{
            height: '100%', backgroundColor: '#C8382D', borderRadius: '999px',
            transition: 'width 0.5s', width: `${progress}%`,
          }} />
        </div>
        <p style={{ fontSize: '12px', color: '#5F6368', marginBottom: '12px' }}>{status}</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handlePause}
            style={{
              flex: 1, padding: '6px 12px', fontSize: '12px', fontWeight: 500, borderRadius: '8px',
              border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#F7F7F8', color: '#5F6368', cursor: 'pointer',
            }}
          >
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button
            onClick={handleStop}
            style={{
              flex: 1, padding: '6px 12px', fontSize: '12px', fontWeight: 500, borderRadius: '8px',
              border: 'none', backgroundColor: '#C8382D', color: 'white', cursor: 'pointer',
            }}
          >
            End Demo
          </button>
        </div>
      </div>
    </div>
  );
}
