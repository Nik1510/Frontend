import React, { useId } from 'react';
import Select from 'react-select';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisabled = false,
    currencyDisable = false,
    className = ""
}) {
    const amountInputId = useId();

    // Format options for react-select
    const formattedOptions = currencyOptions.map((currency) => ({
        value: currency,
        label: currency.toUpperCase(),
    }));

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount Input */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency Dropdown with react-select */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <div className="w-full">
                    <Select
                        options={formattedOptions}
                        value={{
                            value: selectCurrency,
                            label: selectCurrency.toUpperCase(),
                        }}
                        onChange={(selectedOption) =>
                            onCurrencyChange && onCurrencyChange(selectedOption.value)
                        }
                        isDisabled={currencyDisable}
                        classNamePrefix="currency-select"
                        className="text-left"
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 6,
                            colors: {
                                ...theme.colors,
                                primary25: '#cbd5e1', // light hover (like Tailwind slate-200)
                                primary: '#2563eb', // blue-600
                            },
                        })}
                    />
                </div>
            </div>
        </div>
    );
}

export default InputBox;
