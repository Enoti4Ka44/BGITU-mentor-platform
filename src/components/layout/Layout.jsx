import Sidebar from "./sidebar/Sidebar";
function Layout({ children }) {
  return (
    <main className="container">
      <Sidebar />
      <div className="pageContainer">{children}</div>
    </main>
  );
}

export default Layout;
