import ListButton from "../list-button";

interface CategoryListProps {
  list: any[];
}

export default function CategoryList(props: CategoryListProps) {
  const { list } = props;
  return (
    <>
      {list.length > 0 && (
        <div className="category-list">
          {list.map((item, index) => (
            <div key={index}>
              <div className="list-item-title">{item.title}</div>
              {item.pages
                ? item?.pages?.map((item: any, key: string) => (
                    <ListButton href={item.href} label={item.label} key={key} />
                  ))
                : null}
              {item.label && <ListButton href={item.href} label={item.label} />}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
