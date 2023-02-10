export const Container = (props) => {
    const { component, screen } = props
    const Component = component || 'div'

    return (
        <Component className={`px-4 mx-auto max-w-${screen || "md"}`} {...props} />
    );
}

