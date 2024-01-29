import classNames from 'classNames';

const Button = ({ children, className, disabled }) => {
	return (
		<button className={classNames("button", className, disabled)}>
			{ children }
		</button>
	);
}

export default Button;