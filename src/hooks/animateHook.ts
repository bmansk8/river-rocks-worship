import { useEffect, useRef } from "react";

export default function useAnimateHook(elementsToObserve: React.RefObject<HTMLDivElement>[]){
    const observer = useRef<IntersectionObserver>();
  
    useEffect(() => {
      observer.current = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
              entry.target.classList.add("show")
            }else{
              entry.target.classList.remove("show")
            }
          })
        })
  
      elementsToObserve.forEach((ref)=> {
        if(ref.current && observer.current) observer.current.observe(ref.current)
      })
    
      return () => {
        if(observer.current) observer.current.disconnect()
      }
    }, [elementsToObserve])
}