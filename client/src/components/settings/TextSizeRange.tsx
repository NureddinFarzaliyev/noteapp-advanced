import { CustomizeProps } from "./Customize"
import { Range } from "react-range"

function TextSizeRange({preferences, setPreferences} : CustomizeProps) {
    return (
        <>
        <Range
          label="Select your value"
          step={2}
          min={8}
          max={64}
          values={[preferences?.textSize !== undefined ? preferences?.textSize : 8]}
          onChange={(values) => setPreferences({
            ...preferences,
            textSize: values[0]
          })}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#ccc",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: "15px",
                width: "15px",
                borderRadius: "50%",
                backgroundColor: "#999",
              }}
            />
          )}
        />
        <span>{preferences.textSize}</span>
        <p>Example text for text size</p>
        </>
    )
}

export default TextSizeRange
