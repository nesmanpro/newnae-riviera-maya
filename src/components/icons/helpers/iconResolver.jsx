
import { iconMap } from './iconMap'

export const IconResolver = ({
    name,
    size = 24,
    className = '',
}) => {
    const Icon = iconMap[name]

    if (!Icon) {
        console.warn(`Icon "${name}" not found`)
        return null
    }

    return <Icon size={size} className={className} />
}
