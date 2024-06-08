import { ReactComponent as SunIcon } from './port-img/sun.svg';
import { ReactComponent as MoonIcon } from './port-img/moon.svg';
import './themeToggle.css'; // Make sure this path is correct

const ThemeToggle = ({theme ,toggleTheme}) => {

  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        className="dark_mode_input"
        id="darkmode-toggle"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <SunIcon className="sun" />
        <MoonIcon className="moon" />
      </label>
    </div>
  );
};

export default ThemeToggle;
