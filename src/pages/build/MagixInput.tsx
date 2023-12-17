import React, {
  FC,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface iProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  onChange: any;
  valueData: any;
  basedColor?: string;
  basedColor2?: string;
  color?: string;
}

const MagixInput: FC<iProps> = ({
  children,
  valueData,
  onChange,
  className,
  basedColor,
  basedColor2,
  color,
  ...props
}) => {
  const myInput: React.MutableRefObject<any> = useRef(null);
  const [value, setValue] = useState<boolean>(false);

  const [val, setVal] = useState<boolean>(false);
  useEffect(() => {
    if (val && myInput.current) {
      myInput.current.focus();
    }
  }, [val]);

  return (
    <div
      className={twMerge(
        `
        border
        ${basedColor2 ? basedColor2 : "border"}
    p-1 rounded-md relative h-12 transition-all duration-300
    ${val ? basedColor : "border"} my-3
    `,
        className
      )}
      onClick={() => {
        setValue(true);
        setVal(true);
      }}
    >
      {/* text-[12px] -top-3 left-3  px-1  
      text-[12px] absolute -top-3 left-3  px-1
      */}
      <div
        className={`${
          val
            ? "text-[12px] absolute top-0 left-0 transition-all duration-300 px-1 opacity-30"
            : `${
                !!valueData
                  ? "text-[12px] absolute top-0 left-0 transition-all duration-300 px-1 opacity-30"
                  : "text-[18px] absolute top-2 px-1 opacity-30 transition-all duration-300"
              }`
        }`}
      >
        {children}
      </div>
      <input
        ref={myInput}
        {...props}
        className="w-full h-full bg-transparent outline-none absolute  "
        // placeholder={`${children}`}
        value={valueData}
        onChange={onChange}
        onFocus={() => {
          setValue(true);
          setVal(true);
        }}
        onBlur={() => {
          setValue(false);
          setVal(false);
        }}
      />
    </div>
  );
};

export default MagixInput;
