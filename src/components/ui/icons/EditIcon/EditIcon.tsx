import { Icon, IconProps } from '@chakra-ui/react';

function EditIcon(props: IconProps) {
    return (
        <Icon viewBox='0 0 24 24' {...props}>
            <path
                d='M23.2531 2.91001C23.3932 3.05059 23.4719 3.241 23.4719 3.43951C23.4719 3.63802 23.3932 3.82843 23.2531 3.96901L21.6886 5.53501L18.6886 2.53501L20.2531 0.96901C20.3937 0.828407 20.5844 0.74942 20.7833 0.74942C20.9822 0.74942 21.1729 0.828407 21.3136 0.96901L23.2531 2.90851V2.91001ZM20.6281 6.59401L17.6281 3.59401L7.40856 13.815C7.32601 13.8975 7.26386 13.9982 7.22706 14.109L6.01956 17.73C5.99766 17.796 5.99455 17.8668 6.01058 17.9345C6.02661 18.0022 6.06114 18.0641 6.11032 18.1132C6.1595 18.1624 6.22139 18.197 6.28907 18.213C6.35675 18.229 6.42755 18.2259 6.49356 18.204L10.1146 16.9965C10.2252 16.9602 10.3259 16.8985 10.4086 16.8165L20.6281 6.59551V6.59401Z'
                fill='#FFFFD3'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M1.5 20.25C1.5 20.8467 1.73705 21.419 2.15901 21.841C2.58097 22.2629 3.15326 22.5 3.75 22.5H20.25C20.8467 22.5 21.419 22.2629 21.841 21.841C22.2629 21.419 22.5 20.8467 22.5 20.25V11.25C22.5 11.0511 22.421 10.8603 22.2803 10.7197C22.1397 10.579 21.9489 10.5 21.75 10.5C21.5511 10.5 21.3603 10.579 21.2197 10.7197C21.079 10.8603 21 11.0511 21 11.25V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H13.5C13.6989 3 13.8897 2.92098 14.0303 2.78033C14.171 2.63968 14.25 2.44891 14.25 2.25C14.25 2.05109 14.171 1.86032 14.0303 1.71967C13.8897 1.57902 13.6989 1.5 13.5 1.5H3.75C3.15326 1.5 2.58097 1.73705 2.15901 2.15901C1.73705 2.58097 1.5 3.15326 1.5 3.75V20.25Z'
                fill='#FFFFD3'
            />
        </Icon>
    );
}

export default EditIcon;
