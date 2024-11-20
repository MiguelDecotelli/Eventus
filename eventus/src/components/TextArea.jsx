/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const textAreaCSS =
	"form-control text-start border-0 bg-transparent custom-input px-0 pt-4 pb-0 shadow-none";

export const TextArea = forwardRef(
	({ label, type = "text", id, placeholder, error, ...rest }, ref) => {
		return (
			<>
				<div className="input-group d-flex flex-nowrap border-bottom">
					<div className="form-floating">
						<textarea
							type={type}
							className={textAreaCSS}
							id={id}
							placeholder={placeholder}
							ref={ref}
							required
							style={{ maxHeight: "80px", minHeight: "80px" }}
							{...rest}
						/>
						<label
							className="no-after bg-transparent"
							style={{ color: "var(--text)" }}
							htmlFor={id}
						>
							{label}
						</label>
					</div>
				</div>

				<p
					className={`alert text-danger p-0 m-0 error-message ${
						error ? "visible" : "invisible"
					}`}
				>
					{error}
				</p>
			</>
		);
	}
);