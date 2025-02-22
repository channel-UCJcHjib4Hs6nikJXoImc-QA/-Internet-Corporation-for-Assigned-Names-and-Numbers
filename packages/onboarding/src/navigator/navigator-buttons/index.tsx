import {
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalHStack as HStack,
	__experimentalItem as Item,
	FlexItem,
} from '@wordpress/components';
import { isRTL } from '@wordpress/i18n';
import { Icon, chevronLeft, chevronRight, chevronDown, check } from '@wordpress/icons';
import classnames from 'classnames';
import './style.scss';

interface NavigatorItemProps {
	className?: string;
	icon?: JSX.Element;
	children: React.ReactNode;
	onClick?: () => void;
	checked?: boolean;
	active?: boolean;
	hasNestedItems?: boolean;
}

interface NavigatorButtonAsItemProps extends NavigatorItemProps {
	path: string;
}

export function NavigatorItem( {
	icon,
	checked,
	active,
	hasNestedItems,
	children,
	...props
}: NavigatorItemProps ) {
	const content = icon ? (
		<HStack justify="flex-start">
			<Icon className="navigator-item__icon" icon={ checked ? check : icon } size={ 24 } />
			<FlexItem className="navigator-item__text">{ children }</FlexItem>
		</HStack>
	) : (
		<FlexItem>{ children }</FlexItem>
	);

	const forwardIcon = isRTL() ? chevronLeft : chevronRight;

	return (
		<Item
			{ ...props }
			className={ classnames( 'navigator-item', {
				'navigator-item--checked': checked,
				'navigator-item--active': active,
			} ) }
		>
			<HStack justify="space-between">
				{ content }
				<Icon icon={ active && hasNestedItems ? chevronDown : forwardIcon } size={ 24 } />
			</HStack>
		</Item>
	);
}

export const NavigatorButtonAsItem = ( { ...props }: NavigatorButtonAsItemProps ) => {
	return <NavigatorButton as={ NavigatorItem } { ...props } />;
};
