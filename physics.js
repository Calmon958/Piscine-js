const getAcceleration = (properties) => {

    if (properties.f !== undefined && properties.m !== undefined){
        return properties.f/properties.m;
    }
    if (properties['Δv'] !== undefined && properties['Δt'] !== undefined){
        return properties['Δv']/properties['Δt'];
    }
    if (properties.d !== undefined  && properties.t !== undefined){
        return (2 * properties.d)/(properties.t**2);
    }
    
        return "impossible"
}
