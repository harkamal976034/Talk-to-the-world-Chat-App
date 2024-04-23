import classNames from "classnames";
import React from "react";
import CustomTypography from "./Typography";

const Message = ({ message, isAdmin }) => {
	return (
		<div
			className={classNames("flex justify-start p-1", {
				"justify-end": isAdmin,
			})}
		>
			<div
				className={classNames("p-4 min-w-[20rem] max-w-[30rem] rounded-xl shadow-md", {
					"bg-primaryLightBg rounded-tl-none": !isAdmin,
					"bg-primaryDarkBg text-primaryWhite rounded-br-none": isAdmin,
				})}
			>
				<CustomTypography
					className={classNames("text-start",{
						"!text-textBlack": !isAdmin,
						"!text-primaryWhite": isAdmin,
                    })}
                    variant="body1"
					label={message.message}
				/>
			</div>
		</div>
	);
};

export default Message;