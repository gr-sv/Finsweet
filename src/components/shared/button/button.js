import classNames from 'classnames';

function Button ({ children, className, disabled }) {
	return (
		<button className={classNames("button", className, disabled)}>
			{ children }
		</button>
	);
}

export default Button;