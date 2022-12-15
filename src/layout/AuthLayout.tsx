import { FC, Fragment, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const AuthLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <div className="flex">
        <div className="w-full">{children}</div>

        <div className="hidden lg:block w-full bg-dark-blue-04 min-h-screen">
          <p className="mx-[150px] mt-32 mb-3 text-white font-medium text-4xl opacity-70">
            Binar Car Rental
          </p>
          <div className="flex justify-end mt-8">
            <img src="/auth_background.png" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
