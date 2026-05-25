import { useEffect, useState } from 'react';

export default function ClientOnlyDynamicGallery({ fallback = null }) {
  const [Gallery, setGallery] = useState(null);

  useEffect(() => {
    (async () => {
      const mod = await import('./client/Gallery.client');
      setGallery(() => mod.default);
    })();
  }, []);

  if (!Gallery) return fallback;
  return <Gallery />;
}
