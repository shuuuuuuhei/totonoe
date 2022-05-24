type inputProps = {
    type: string,
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placehodlder: string|undefined,
    errorDiv: string,
    errorMsg: string,
    className: string,
}

export const Input = (props: inputProps) => {
    const { type, name, value, onChange, placehodlder, errorDiv, errorMsg, className } = props
    return(
        <input
            type={type}
            className={`form-control ${className}`}
            id={name}
            name={name}
            defaultValue={value}
            onChange={onChange}
            placeholder={placehodlder}
        />
    )
}