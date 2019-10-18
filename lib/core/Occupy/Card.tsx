/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-10-09T13:59:54.538Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/

import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../interfaces';
import { accordType, splitJsxProps, handleSize } from '../../helper';

import classNames from 'classnames';

const prefix = 's-occupy-card';

const CardAttrs = ['style', 'className', 'size', 'effect'];

interface CardTempProps extends SilentCommonAttr, HTMLAttributes<HTMLDivElement> {
	className?: any;
}

interface CardProps extends CardTempProps {
	className?: ClassValue;
	flash?: boolean;
}

const presetProps = function(props: CardProps) {
	const sProps = splitJsxProps<CardProps>(props, CardAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-10-09T13:59:33.841Z
 *			DESCRIPTION --- Card
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Card: FC<CardProps> = function(props) {
	const { nativeProps, customProps } = presetProps(props);

	const { size, style, className, flash } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<div className={classNames(prefix, className)} style={containerStyle}>
			{Array(4)
				.fill('')
				.map((ele, index) => (
					<div {...nativeProps} className={classNames({ isFlash: flash })} key={index} />
				))}
		</div>
	);
};

Card.defaultProps = {
	flash: false
};

export default React.memo(Card);