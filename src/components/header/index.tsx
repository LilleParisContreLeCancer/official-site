import { HeaderContent } from './headerContent';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <HeaderContent />
    </header>
  );
}
