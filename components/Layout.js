import Head from "next/head";
const Layout = ({ title, children }) => {
  return (
    <div className="bg-white">
      <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};
export default Layout;
