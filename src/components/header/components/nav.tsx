import NavLink from '@/components/navlink';

type NavPropsType = {
  className?: string;
};

export default function Nav({ className = '' }: NavPropsType = {}) {
  return (
    <ul className={className}>
      <li className="flex">
        <NavLink href="/">Home</NavLink>
      </li>
      <li className="flex">
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
  );
}
