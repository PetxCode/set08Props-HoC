import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface iProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const Input: FC<iProps> = ({ children, className, ...props }) => {
  const myInput: React.MutableRefObject<any> = useRef(null);
  const [value, setValue] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<boolean>(false);

  useEffect(() => {
    if (value && myInput.current) {
      myInput.current.focus();
    }
  }, [value]);

  return (
    <div className="text-black mt-6">
      <div
        {...props}
        className={twMerge(
          `ducration-300 transition-all border flex items-center w-[350px] py-3 px-4 rounded-md 
        ${inputValue && "border-blue-500"}
        `,
          className
        )}
        onClick={() => {
          setInputValue(true);
          setValue(true);
        }}
      >
        <label>{children}</label>
        <input
          {...props}
          ref={myInput}
          type="text"
          className="ml-2 flex-1 outline-none h-full "
          onBlur={() => {
            setInputValue(false);
            setValue(false);
          }}
        />
      </div>
    </div>
  );
};

export default Input;
