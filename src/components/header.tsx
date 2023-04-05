import NavLink from '@/components/navlink';
import Logo from './logo';

type HeaderPropsType = {
  title: string;
};

export default function Header({ title }: HeaderPropsType) {
  return (
    <div className="flex flex-row justify-between my-8">
      <div className="flex mr-4 mt-2">
        <Logo />
        <span className="flex text-2xl font-bold ml-7">{title}</span>
      </div>
      <nav className="flex mt-2">
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
      <button className="px-12 py-2 bg-black text-white rounded-lg">
        Contact Us
      </button>
    </div>
  );
}
