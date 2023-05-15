import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Oval
        height={50}
        width={50}
        color="#e6373d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
