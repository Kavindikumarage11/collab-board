import './Button.css';

// This is a component. It's a function that returns JSX (HTML-like code).
// "children" is a special prop — it means "whatever is placed inside <Button>...</Button>"
function Button({ children, onClick }) {
  return (
    <button className="new-task-btn" onClick={onClick}>
      <span className="plus-icon">+</span>
      {children}
    </button>
  );
}

export default Button;