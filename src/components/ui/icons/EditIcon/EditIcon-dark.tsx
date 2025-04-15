import { Icon, IconProps } from '@chakra-ui/react';

function EditIcon(props: IconProps) {
    return (
        <Icon viewBox='0 0 24 24' {...props}>
            <path
                d='M23.2526 2.90998C23.3927 3.05056 23.4714 3.24097 23.4714 3.43948C23.4714 3.63799 23.3927 3.82839 23.2526 3.96898L21.6881 5.53498L18.6881 2.53498L20.2526 0.96898C20.3932 0.828376 20.584 0.74939 20.7828 0.74939C20.9817 0.74939 21.1724 0.828376 21.3131 0.96898L23.2526 2.90848V2.90998ZM20.6276 6.59398L17.6276 3.59398L7.40807 13.815C7.32552 13.8975 7.26337 13.9982 7.22657 14.109L6.01907 17.73C5.99717 17.796 5.99407 17.8668 6.01009 17.9345C6.02612 18.0022 6.06066 18.064 6.10984 18.1132C6.15901 18.1624 6.2209 18.1969 6.28858 18.213C6.35626 18.229 6.42706 18.2259 6.49307 18.204L10.1141 16.9965C10.2247 16.9601 10.3254 16.8985 10.4081 16.8165L20.6276 6.59548V6.59398Z'
                fill='black'
                fill-opacity='0.92'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M1.5 20.25C1.5 20.8467 1.73705 21.419 2.15901 21.841C2.58097 22.2629 3.15326 22.5 3.75 22.5H20.25C20.8467 22.5 21.419 22.2629 21.841 21.841C22.2629 21.419 22.5 20.8467 22.5 20.25V11.25C22.5 11.0511 22.421 10.8603 22.2803 10.7197C22.1397 10.579 21.9489 10.5 21.75 10.5C21.5511 10.5 21.3603 10.579 21.2197 10.7197C21.079 10.8603 21 11.0511 21 11.25V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H13.5C13.6989 3 13.8897 2.92098 14.0303 2.78033C14.171 2.63968 14.25 2.44891 14.25 2.25C14.25 2.05109 14.171 1.86032 14.0303 1.71967C13.8897 1.57902 13.6989 1.5 13.5 1.5H3.75C3.15326 1.5 2.58097 1.73705 2.15901 2.15901C1.73705 2.58097 1.5 3.15326 1.5 3.75V20.25Z'
                fill='black'
                fill-opacity='0.92'
            />
        </Icon>
    );
}

export default EditIcon;
