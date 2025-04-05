import React from 'react'

const borderStyles = 'border-[3px] border-almost-black rounded-lg';
const filledStyles = 'text-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bgtransperent hover:bg-almost-white hover:text-almost-black border-[3px] border-almost-black';

export const Button = ({
	children = '',
	hasBorder = false,
	isFilled = false
}) => {
	return (
		<button className={`text-medium-grey px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`} >{children}</button>
	)
}
