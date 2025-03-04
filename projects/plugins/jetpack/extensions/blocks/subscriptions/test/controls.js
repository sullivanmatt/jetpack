import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DEFAULT_FONTSIZE_VALUE } from '../constants';
import SubscriptionsInspectorControls from '../controls';

// Temporarily mock out the ButtonWidthControl, which is causing errors due to missing
// dependencies in the jest test runner.
jest.mock( '../../button/button-width-panel', () => ( {
	...jest.requireActual( '../../button/button-width-panel' ),
	ButtonWidthControl: () => <div>Mocked Width Control</div>,
} ) );

const setButtonBackgroundColor = jest.fn();
const setGradient = jest.fn();
const setTextColor = jest.fn();
const setAttributes = jest.fn();

const defaultProps = {
	buttonBackgroundColor: { color: '#000000' },
	borderColor: { color: '#000000' },
	buttonGradient: {
		buttonGradient: 10,
		setGradient,
	},
	borderRadius: 0,
	borderWeight: 0,
	buttonOnNewLine: false,
	emailFieldBackgroundColor: { color: '#000000' },
	fallbackButtonBackgroundColor: '#000000',
	fallbackTextColor: '#000000',
	fontSize: DEFAULT_FONTSIZE_VALUE,
	isGradientAvailable: true,
	padding: 0,
	setAttributes,
	setButtonBackgroundColor,
	setTextColor,
	showSubscribersTotal: true,
	spacing: 0,
	subscriberCount: 100,
	textColor: '#000000',
};

beforeEach( () => {
	setAttributes.mockClear();
	setGradient.mockClear();
	setTextColor.mockClear();
	setButtonBackgroundColor.mockClear();
} );

describe( 'Inspector controls', () => {
	describe( 'Gradient settings panel', () => {
		test( 'displays gradient settings control panel', () => {
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );

			expect( screen.getByText( 'Color' ) ).toBeInTheDocument();
			expect( screen.queryByText( 'Background Colors' ) ).not.toBeInTheDocument();
		} );

		test( 'sets solid background color', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Button Background', { ignore: '[aria-hidden=true]' } ) );
			await user.click( screen.getByText( 'Solid', { ignore: '[aria-hidden=true]' } ) );
			await user.click(
				screen.queryAllByLabelText( /Color: (?!Black)/i, { selector: 'button' } )[ 0 ]
			);

			expect( setButtonBackgroundColor.mock.calls[ 0 ][ 0 ] ).toMatch( /#[a-z0-9]{6,6}/ );
		} );
	} );

	describe( 'Color settings panel', () => {
		test( 'hides gradient settings control panel', () => {
			render(
				<SubscriptionsInspectorControls { ...defaultProps } isGradientAvailable={ false } />
			);

			expect( screen.getByText( 'Background Colors' ) ).toBeInTheDocument();
			expect( screen.queryByText( 'Color Settings' ) ).not.toBeInTheDocument();
		} );

		test( 'sets gradient background color', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Button Background', { ignore: '[aria-hidden=true]' } ) );
			await user.click( screen.getByText( 'Gradient', { ignore: '[aria-hidden=true]' } ) );
			await user.click( screen.queryAllByLabelText( /Gradient:/i, { selector: 'button' } )[ 0 ] );

			expect( setGradient.mock.calls[ 0 ][ 0 ] ).toMatch( /linear-gradient\((.+)\)/ );
		} );
	} );

	describe( 'Typography panel', () => {
		test( 'displays correctly', () => {
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );

			expect( screen.getByText( 'Typography' ) ).toBeInTheDocument();
		} );

		test( 'set custom text', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Typography' ), { selector: 'button' } );
			await user.type( screen.getAllByLabelText( 'Custom Size' )[ 1 ], '18' );

			expect( setAttributes ).toHaveBeenLastCalledWith( {
				fontSize: 18,
				customFontSize: 18,
			} );
		} );
	} );

	describe( 'Border settings panel', () => {
		test( 'displays correctly', () => {
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );

			expect( screen.getByText( 'Border', { selector: 'button' } ) ).toBeInTheDocument();
		} );

		test( 'set border radius', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Border', { selector: 'button' } ) );
			const rangeControlElement = screen.getAllByLabelText( 'Border Radius' )[ 1 ];
			await user.clear( rangeControlElement );
			await user.type( rangeControlElement, '5' );

			expect( setAttributes ).toHaveBeenLastCalledWith( {
				borderRadius: 5,
			} );
		} );

		test( 'set border weight', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Border', { selector: 'button' } ) );
			const rangeControlElement = screen.getAllByLabelText( 'Border Weight' )[ 1 ];
			await user.clear( rangeControlElement );
			await user.type( rangeControlElement, '5' );

			expect( setAttributes ).toHaveBeenLastCalledWith( {
				borderWeight: 5,
			} );
		} );
	} );

	describe( 'Spacing settings panel', () => {
		test( 'displays correctly', () => {
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );

			expect( screen.getByText( 'Spacing' ) ).toBeInTheDocument();
		} );

		test( 'set space inside', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Spacing' ), { selector: 'button' } );
			const rangeControlElement = screen.getAllByLabelText( 'Space Inside' )[ 1 ];
			await user.clear( rangeControlElement );
			await user.type( rangeControlElement, '5' );

			expect( setAttributes ).toHaveBeenLastCalledWith( {
				padding: 5,
			} );
		} );

		test( 'set space between', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Spacing' ), { selector: 'button' } );
			const rangeControlElement = screen.getAllByLabelText( 'Space Between' )[ 1 ];
			await user.clear( rangeControlElement );
			await user.type( rangeControlElement, '5' );

			expect( setAttributes ).toHaveBeenLastCalledWith( {
				spacing: 5,
			} );
		} );
	} );

	describe( 'Display settings panel', () => {
		test( 'displays correctly', () => {
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			expect( screen.getByText( 'Settings' ) ).toBeInTheDocument();
		} );

		test( 'toggles subscriber count', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Settings' ), { selector: 'button' } );
			await user.click( screen.getByLabelText( 'Show subscriber count' ) );

			expect( setAttributes ).toHaveBeenCalledWith( {
				showSubscribersTotal: false,
			} );
		} );

		test( 'toggles place button on new line', async () => {
			const user = userEvent.setup();
			render( <SubscriptionsInspectorControls { ...defaultProps } /> );
			await user.click( screen.getByText( 'Settings' ), { selector: 'button' } );
			await user.click( screen.getByLabelText( 'Place button on new line' ) );

			expect( setAttributes ).toHaveBeenCalledWith( {
				buttonOnNewLine: true,
			} );
		} );
	} );
} );
