
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <h1>Default Layout</h1>
        {/* Add your navigation here */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
