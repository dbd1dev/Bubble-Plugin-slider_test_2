function(instance, properties, context) {
    // Limpiar el contenedor
    if (!instance.canvas) return;
    instance.canvas.innerHTML = "";

    // Obtener parámetros
    var min = properties.min || 0;
    var max = properties.max || 100;
    var step = properties.step || 1;
    var initialValue = properties.initial_value || 50;
    var mainColor = properties.main_color || "#1976d2";
    var bgColor = properties.bg_color || "#e0e0e0";
    var thumbColor = properties.thumb_color || mainColor;
    var trackThickness = properties.track_thickness || 6;
    var sliderWidth = properties.slider_width || 400;

    // Crear un div raíz para React
    var reactRootId = "mui-slider-preview-root-" + (instance.data && instance.data.element_id ? instance.data.element_id : Math.random());
    var reactRoot = document.createElement("div");
    reactRoot.id = reactRootId;
    reactRoot.style.width = sliderWidth + "px";
    reactRoot.style.margin = "0 auto";
    instance.canvas.appendChild(reactRoot);

    // React y Material UI desde window
    var React = window.React;
    var ReactDOM = window.ReactDOM;
    var MaterialUI = window["MaterialUI"];
    if (!React || !ReactDOM || !MaterialUI) {
        reactRoot.innerHTML = "Material UI o React no cargados";
        return;
    }
    var Slider = MaterialUI.Slider;

    var CustomSliderPreview = function() {
        var _React$useState = React.useState(initialValue),
            value = _React$useState[0];
        return React.createElement(
            "div",
            { style: { width: "100%", display: "flex", flexDirection: "column", alignItems: "center" } },
            React.createElement(
                "div",
                { style: { marginBottom: 8, fontWeight: 600, fontSize: 18, color: mainColor } },
                value
            ),
            React.createElement(Slider, {
                value: value,
                min: min,
                max: max,
                step: step,
                disabled: true,
                sx: {
                    color: mainColor,
                    height: trackThickness,
                    width: sliderWidth,
                    '& .MuiSlider-thumb': {
                        backgroundColor: thumbColor,
                        border: '2px solid ' + mainColor,
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: bgColor,
                        opacity: 1,
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: mainColor,
                    },
                }
            })
        );
    };

    ReactDOM.render(React.createElement(CustomSliderPreview), reactRoot);
}

    // Limpiar el contenedor
    if (!instance.canvas) return;
    instance.canvas.innerHTML = "";

    // Obtener parámetros
    const min = properties.min || 0;
    const max = properties.max || 100;
    const step = properties.step || 1;
    const initialValue = properties.initial_value || 50;
    const mainColor = properties.main_color || "#1976d2";
    const bgColor = properties.bg_color || "#e0e0e0";
    const thumbColor = properties.thumb_color || mainColor;
    const trackThickness = properties.track_thickness || 6;
    const sliderWidth = properties.slider_width || 400;

    // Crear un div raíz para React
    const reactRootId = "mui-slider-preview-root-" + instance.data.element_id;
    let reactRoot = document.createElement("div");
    reactRoot.id = reactRootId;
    reactRoot.style.width = sliderWidth + "px";
    reactRoot.style.margin = "0 auto";
    instance.canvas.appendChild(reactRoot);

    // React y Material UI desde window
    const React = window.React;
    const ReactDOM = window.ReactDOM;
    const MaterialUI = window["MaterialUI"];
    if (!React || !ReactDOM || !MaterialUI) {
        reactRoot.innerHTML = "Material UI o React no cargados";
        return;
    }
    const Slider = MaterialUI.Slider;

    // Componente personalizado para el slider
    function CustomSliderPreview() {
        const [value] = React.useState(initialValue);
        return React.createElement(
            "div",
            { style: { width: "100%", display: "flex", flexDirection: "column", alignItems: "center" } },
            React.createElement(
                "div",
                { style: { marginBottom: 8, fontWeight: 600, fontSize: 18, color: mainColor } },
                value
            ),
            React.createElement(Slider, {
                value: value,
                min: min,
                max: max,
                step: step,
                disabled: true,
                sx: {
                    color: mainColor,
                    height: trackThickness,
                    width: sliderWidth,
                    '& .MuiSlider-thumb': {
                        backgroundColor: thumbColor,
                        border: `2px solid ${mainColor}`,
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: bgColor,
                        opacity: 1,
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: mainColor,
                    },
                },
            })
        );
    }

    ReactDOM.render(React.createElement(CustomSliderPreview), reactRoot);
}