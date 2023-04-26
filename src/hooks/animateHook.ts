import { useEffect, useRef } from "react";

export default function useAnimateHook(
  elementsToObserve: React.RefObject<Element>[]
) {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(observerCallback);

    startObservingFunc(elementsToObserve, observer.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [elementsToObserve]);
}

function observerCallback(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting ) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}

function startObservingFunc(
  elementsToObserve: React.RefObject<Element>[],
  observer: IntersectionObserver
) {
  elementsToObserve.forEach((ref) => {
    if (ref.current && observer) observer.observe(ref.current);
  });
}

//&& entry.intersectionRatio >= .8