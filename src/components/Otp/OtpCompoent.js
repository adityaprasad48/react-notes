import clsx from "clsx";
import React, { createRef, useEffect, useMemo, useState } from "react";
import { Item, OtpContainer } from "../../style";

const KEY_CODE = {
	BACKSPACE: 8,
	ARROW_LEFT: 37,
	ARROW_RIGHT: 39,
	DELETE: 46,
};

const OtpCompoent = () => {
	let length = 4;
	let placeholder = ".";
	let value = "33434";
	let onChange = () => {};

	const emptyValue = new Array(length).fill(placeholder);
	const [activeIndex, setActiveIndex] = useState(-1);
	const [val, setVal] = useState(value ? value.split("") : emptyValue);

	const codeInputRef = createRef();

	// memorizing ref
	const itemsRef = useMemo(
		() => new Array(length).fill(null).map(() => createRef()),
		[length]
	);

	console.log(itemsRef);

	const isCodeRegex = new RegExp(`^[0-9]{${length}}$`);

	const getItem = (index) => itemsRef[index]?.current;
	const focusItem = (index) => getItem(index)?.focus();
	const blurItem = (index) => getItem(index)?.focus();

	console.log(emptyValue);

	const onInputChange = (e) => {
		console.log("hii");
		const isCode = isCodeRegex.test(e.target.value);
		console.log(isCode);

		if (!isCode) return;

		setVal(e.target.value.split(""));
		blurItem(activeIndex);
	};

	const onInputKeyUp = () => {};

	const onInputBlur = () => {};

	const onItmFocus = (index) => {
		setActiveIndex(index);
		console.log("onItemFocus");
		if (codeInputRef.current) {
			codeInputRef.current.focus();
		}
		console.log(activeIndex);
	};

	// effect for copy text and pasting
	useEffect(() => {
		const codeInput = codeInputRef.current;
		if (!codeInput) return;

		// when you will paste on input
		const onPaste = (e) => {
			e.preventDefault();

			const pastedString = e.clipboardData?.getData("text");

			if (!pastedString) return;

			// for 123 false for 'hello' true
			const isNumber = !isNaN(pastedString);

			if (isNumber) setVal(pastedString.split(""));

			console.log(val);
		};

		codeInput.addEventListener("paste", onPaste);

		return () => codeInput.removeEventListener("paste", onPaste);
	});

	useEffect(() => {
		// onChange(value?.join(""));
		if (typeof value !== "string") return;

		// avoid infinite loop
		if (value === "" && val.join("") === emptyValue.join("")) return;

		// keep internal and external state in sync
		if (value !== val.join("")) setVal(value.split(""));
	}, [value, emptyValue, val]);

	// let a = "Good";
	// let b = a.split("");
	// console.log(b.join(""));

	return (
		<OtpContainer>
			<input
				type="text"
				ref={codeInputRef}
				autoComplete="one-time-code"
				inputMode="decimal"
				id="one-time-code"
				onChange={onInputChange}
				onKeyUp={onInputKeyUp}
				onBlur={onInputBlur}
				// activeIndex={activeIndex}
			/>
			{itemsRef.map((ref, i) => (
				<Item
					key={i}
					ref={ref}
					role="button"
					tabIndex={0}
					onFocus={() => onItmFocus(i)}
					className={clsx([
						"otp__item",
						i === activeIndex && " is-active",
					])}
				>
					{value[i] || placeholder}
				</Item>
			))}
		</OtpContainer>
	);
};

export default OtpCompoent;
