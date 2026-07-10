import { ReactNode } from "react";

interface PhoneFrameProps {
  children?: ReactNode;
  gradient?: string;
  color?: string;
  imageUrl?: string;
}

export default function PhoneFrame({ children, gradient, color = "#5B7FDE", imageUrl }: PhoneFrameProps) {
  return (
    <div className="relative w-full aspect-[9/19] max-w-[260px] mx-auto">
      <div className="absolute inset-0 rounded-[2.5rem] border-[2px] border-border-dark overflow-hidden shadow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-white/[0.06] rounded-b-2xl z-10" />
        <div className="absolute inset-[4px] rounded-[2.3rem] overflow-hidden bg-dark-base">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : children ? (
            children
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: gradient || `linear-gradient(135deg, ${color}25, ${color}08)`,
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color }}>
                <div className="w-5 h-5 rounded-lg bg-white/25" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
