type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  color?: 'red' | 'green';
};

const Button = ({
  children,
  isLoading = false,
  color = 'green'
}: ButtonProps) => {
  return (
    <button style={{ backgroundColor: color}}>
      {isLoading? 'Loading...' : children}
      </button>
  );
};

export default Button