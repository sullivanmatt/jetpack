import {
	InnerBlocks,
	__experimentalBlockPatternSetup as BlockPatternSetup, // eslint-disable-line wpcalypso/no-unsafe-wp-apis
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { cloneBlock, createBlock, getBlockType, registerBlockVariation } from '@wordpress/blocks';
import { Button, Modal, Placeholder } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { get } from 'lodash';
import defaultVariations from './variations';

const JetpackBlockVariationPicker = function ( { variations, onSelect } ) {
	return (
		<ul
			aria-label={ __( 'Payment Block list', 'jetpack' ) }
			className="wp-payments-intro-variation-picker"
		>
			{ variations.map( variation => (
				<li key={ variation.name }>
					<Button
						variant="secondary"
						icon={ variation.icon }
						iconSize={ 48 }
						onClick={ () => onSelect( variation ) }
						className="wp-payments-intro-variation-picker__variation"
						label={ variation.description || variation.title }
					/>
					<span className="wp-payments-intro-variation-picker__variation-label" role="presentation">
						{ variation.title }
					</span>
				</li>
			) ) }
		</ul>
	);
};

const JetpackPatternPicker = function ( { onBlockPatternSelect, patternFilter } ) {
	const [ isPatternSelectionModalOpen, setIsPatternSelectionModalOpen ] = useState( false );

	return (
		<>
			<Button
				variant="primary"
				onClick={ () => setIsPatternSelectionModalOpen( true ) }
				className="wp-payments-intro-pattern-picker__opener"
			>
				{ __( 'Choose a pattern', 'jetpack' ) }
			</Button>
			{ isPatternSelectionModalOpen && (
				<Modal
					title={ __( 'Choose a pattern', 'jetpack' ) }
					closeLabel={ __( 'Cancel', 'jetpack' ) }
					onRequestClose={ () => setIsPatternSelectionModalOpen( false ) }
				>
					<BlockPatternSetup
						onBlockPatternSelect={ onBlockPatternSelect }
						filterPatternsFn={ patternFilter }
					/>
				</Modal>
			) }
		</>
	);
};

export default function JetpackPaymentsIntroEdit( { name, clientId } ) {
	const patternFilter = pattern => {
		return pattern.categories.includes( 'earn' );
	};

	const { blockType, hasInnerBlocks, hasPatterns } = useSelect( select => {
		const { getBlocks, __experimentalGetAllowedPatterns } = select( blockEditorStore );

		return {
			blockType: getBlockType( name ),
			hasInnerBlocks: getBlocks( clientId )?.length > 0,
			hasPatterns: __experimentalGetAllowedPatterns().filter( patternFilter ).length > 0,
		};
	} );

	const { replaceBlock, selectBlock } = useDispatch( blockEditorStore );

	const setVariation = variation => {
		replaceBlock( clientId, createBlock( variation.name ) );
		selectBlock( clientId );
	};

	const usableVariations = defaultVariations.filter( variation => getBlockType( variation.name ) );

	useEffect( () => {
		// Populate default variation on older versions of WP or GB that don't support variations.
		if ( ! hasInnerBlocks && ! registerBlockVariation ) {
			setVariation( usableVariations[ 0 ] );
		}
	} );

	const displayVariations = usableVariations.length && registerBlockVariation;

	let instructions = __( "Please select which kind of payment you'd like to add", 'jetpack' );
	if ( hasPatterns ) {
		instructions = __( 'Start by choosing one of our suggested layout patterns', 'jetpack' );
	}

	if ( ! hasInnerBlocks && displayVariations ) {
		return (
			<Placeholder
				icon={ get( blockType, [ 'icon', 'src' ] ) }
				label={ get( blockType, [ 'title' ] ) }
				instructions={ instructions }
				className="wp-payments-intro-wrapper"
			>
				{ hasPatterns && (
					<>
						<JetpackPatternPicker
							onBlockPatternSelect={ blocks => {
								const clonedBlocks = blocks.map( block => cloneBlock( block ) );
								replaceBlock( clientId, clonedBlocks );
							} }
							patternFilter={ patternFilter }
						/>
						<p>{ __( 'Or use one of our blocks to create your own', 'jetpack' ) }</p>
					</>
				) }
				<JetpackBlockVariationPicker
					variations={ usableVariations }
					onSelect={ ( nextVariation = usableVariations[ 0 ] ) => {
						setVariation( nextVariation );
					} }
				/>
			</Placeholder>
		);
	}

	return <InnerBlocks />;
}
