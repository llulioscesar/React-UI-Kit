import React, {FC} from 'react';
import {BoxStyle} from './style';
import {
    IPropsBox,
    IPropsBoxAsAnchor,
    IPropsBoxAsButton,
    IPropsBoxAsElement,
    IPropsBoxAsHeading,
    IPropsBoxAsImage,
    IPropsBoxAsInput,
    IPropsBoxAsParagraph,
    IPropsBoxAsSpan
} from './types';

export const Box: FC<IPropsBox | IPropsBoxAsAnchor | IPropsBoxAsImage | IPropsBoxAsButton | IPropsBoxAsElement | IPropsBoxAsHeading | IPropsBoxAsInput | IPropsBoxAsParagraph | IPropsBoxAsSpan> = (props) => {

    const {
        textDecoration,
        visibility,
        animation,
        color,
        cursor,
        display,
        marginLeft,
        marginRight,
        fontWeight,
        marginTop,
        marginBottom,
        margin,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        elevation,
        width,
        height,
        overflow,
        position,
        background,
        top,
        left,
        right,
        bottom,
        zIndex,
        transform,
        transition,
        border,
        borderTop,
        borderLeft,
        borderRight,
        borderBottom,
        borderRadius,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        textAlign,
        fontSize,
        fontFamily,
        css,
        outline,
        boxShadow,
        whiteSpace,
        textOverFlow,
        children
    } = props;

    return (
        <BoxStyle
            {...props}
            $animation={animation}
            $textDecoration={textDecoration}
            $visibility={visibility}
            $position={position}
            $color={color}
            $cursor={cursor}
            $display={display}
            $marginLeft={marginLeft}
            $marginRight={marginRight}
            $marginBottom={marginBottom}
            $marginTop={marginTop}
            $margin={margin}
            $padding={padding}
            $paddingTop={paddingTop}
            $paddingBottom={paddingBottom}
            $paddingLeft={paddingLeft}
            $paddingRight={paddingRight}
            $fontWeight={fontWeight}
            $elevation={elevation}
            $width={width}
            $height={height}
            $maxHeight={maxHeight}
            $minHeight={minHeight}
            $maxWidth={maxWidth}
            $minWidth={minWidth}
            $overflow={overflow}
            $top={top}
            $left={left}
            $right={right}
            $bottom={bottom}
            $background={background}
            $zIndex={zIndex}
            $border={border}
            $borderBottom={borderBottom}
            $borderLeft={borderLeft}
            $borderRight={borderRight}
            $borderTop={borderTop}
            $borderRadius={borderRadius}
            $transform={transform}
            $transition={transition}
            $textAlign={textAlign}
            $fontSize={fontSize}
            $fontFamily={fontFamily}
            $css={css}
            $outline={outline}
            $boxShadow={boxShadow}
            $whiteSpace={whiteSpace}
            $textOverFlow={textOverFlow}
        >{children}</BoxStyle>
    )
}