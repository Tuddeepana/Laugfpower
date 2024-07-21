import 'tailwindcss/tailwind.css';

export default function ListComponent({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-1xl">
          {item}
        </li>
      ))}
    </ul>
  );
}
