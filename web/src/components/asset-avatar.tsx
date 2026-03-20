type AssetAvatarProps = {
  title: string;
  imageUrl?: string | null;
  symbol?: string | null;
  sourceKind?: string | null;
  size?: 'sm' | 'md' | 'lg';
};

export function AssetAvatar({
  title,
  imageUrl,
  symbol,
  sourceKind,
  size = 'md',
}: AssetAvatarProps) {
  const fallback = (symbol || title)
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <div className={`asset-avatar asset-avatar-${size}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="asset-avatar-image" />
      ) : (
        <span className="asset-avatar-fallback">{fallback || 'CA'}</span>
      )}
      {sourceKind ? <span className="asset-avatar-source">{sourceKind.slice(0, 2)}</span> : null}
    </div>
  );
}
