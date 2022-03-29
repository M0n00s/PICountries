import React from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export const Pagination = () => {
	return (
		<div>
			<button>
				<BsFillCaretLeftFill />
			</button>
			<button>
				<BsFillCaretRightFill />
			</button>
		</div>
	);
};
