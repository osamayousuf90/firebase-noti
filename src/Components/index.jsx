export const DeviceId = () => {

    const getDeviceId = () => {
        let deviceId = localStorage.getItem('deviceId');
        if (!deviceId) {
            // Generate a random device ID if not already stored
            deviceId = generateRandomId();
            localStorage.setItem('deviceId', deviceId);
        }
        return deviceId;
    };
    const generateRandomId = () => {
        return 'device-' + Math.random().toString(36).substr(2, 10);
    };

    const deviceId = getDeviceId();

    return (
        <div>
            <p>Device ID: {deviceId}</p>
        </div>
    );
};