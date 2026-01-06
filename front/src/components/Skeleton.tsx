const Skeleton = ({ className }: { className?: string }) => {
    return (
        <div className={`animate-pulse bg-white/5 rounded-xl ${className}`} />
    );
};

export default Skeleton;
