import { FC, Fragment } from "react";

type Props = {
  label?: string;
  placeholder?: string;
  optional?: boolean;
  type?: string;
  className?: string;
  onchange?: any;
  labelClassName?: string;
};


export const Input: FC<Props> = (props) => {
  const { label, placeholder, labelClassName,  type, className, onchange } = props;
  return (
    <Fragment>
       <div>
         <p className={labelClassName}>{label}</p>
        <input name={label?.toLowerCase()} type={type} className={className} placeholder={placeholder} onChange={onchange}/>
       </div>
    </Fragment>
  )
};
