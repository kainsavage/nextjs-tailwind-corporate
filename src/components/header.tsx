import NavLink from '@/components/navlink';
import Logo from './logo';
import Hamburder from './hamburder/hamburder';

type HeaderPropsType = {
  title: string;
};

export default function Header({ title }: HeaderPropsType) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <Hamburder className="sm:hidden aboslute">
        <nav>
          <div className="z-20 relative">This</div>
          <div>Is</div>
          <div>The</div>
          <div>Sidebar</div>
        </nav>
      </Hamburder>
      <div className="flex mr-4 mt-2">
        <Logo />
        <span className="flex text-2xl font-bold ml-7">{title}</span>
      </div>
      <nav className="flex mt-2 hidden">
        <ul className="flex flex-row space-x-8">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/why_choose_sd">Why Choose SD</NavLink>
          </li>
          <li>
            <NavLink href="/services">Services</NavLink>
          </li>
          <li>
            <NavLink href="/tax_center">Tax Center</NavLink>
          </li>
          <li>
            <NavLink href="/resource_center">Resource Center</NavLink>
          </li>
        </ul>
      </nav>
      {/* <button className="px-12 py-2 bg-black text-white rounded-lg">
        Contact Us
      </button> */}
    </div>
  );
}
