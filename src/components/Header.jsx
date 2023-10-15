const Header = ({ title, subTitle }) => {
  return (
    <div className="m-5">
      <p className="text-black dark:text-white text-3xl font-semibold">
        {title}
      </p>
      <p className="text-teal-700 dark:text-teal-500 text-sm">{subTitle}</p>
    </div>
  );
};

export default Header;
