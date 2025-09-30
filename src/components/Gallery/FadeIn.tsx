import { Children } from "react";

export function FadeIn({children}: {children: React.ReactNode[]}) {
    return (
        <>
        {
            Children.toArray(children).map((child, idx) => (
                <div key={idx} style={{opacity: 0, animation: `fadeInUp 0.5s ease-out forwards`, animationDelay: `${idx * 50}ms`}}>
                    {child}
                </div>
            ))
        }
        </>
    )
}