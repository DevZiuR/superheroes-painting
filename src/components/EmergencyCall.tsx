import ScrollVelocity from './ScrollVelocity';

const EmergencyCall = () => {
    return (
        <ScrollVelocity
            texts={['NEED PAINTING HELP?', 'CALL (916) 807-6156']}
            velocity={80}
            className="text-white font-montserrat"
        />
    );
};

export default EmergencyCall;
