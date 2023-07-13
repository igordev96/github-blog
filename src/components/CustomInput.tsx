export type CustomInputProps = {
	value: string;
	setValue: (val: string) => void;
};

export default function CustomInput(props: CustomInputProps) {
	const { value, setValue } = props;

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		setValue(newValue);
	};

	return (
		<input
			className='border border-base-border outline-none bg-base-input w-full p-4 text-base font-normal rounded-md mt-3 text-base-text focus:border-blue  placeholder:text-base-label'
			placeholder='Search content'
			value={value}
			onChange={handleOnChange}
		/>
	);
}
