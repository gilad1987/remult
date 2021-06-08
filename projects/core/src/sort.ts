
import { FieldDefinitions } from "./column-interfaces";
import { EntityDefinitions, EntityOrderBy, sortOf } from "./remult3";
export class Sort {
  constructor(...segments: SortSegment[]) {
    this.Segments = segments;
  }
  Segments: SortSegment[];
  reverse() {
    let r = new Sort();
    for (const s of this.Segments) {
      r.Segments.push({ field: s.field, isDescending: !s.isDescending });
    }
    return r;
  }
  static createSortOf<T>(entityDefs: EntityDefinitions<T>): sortOf<T> {
    let r = {};
    for (const c of entityDefs.fields) {
      r[c.key] = new sortHelper(c);
    }
    return r as sortOf<T>;
  }
  static translateOrderByToSort<T>(entityDefs: EntityDefinitions<T>, orderBy: EntityOrderBy<T>): Sort {
    if (!orderBy)
      return undefined;
    let entity = Sort.createSortOf(entityDefs);
    let resultOrder = orderBy(entity);//
    let sort: Sort;
    if (Array.isArray(resultOrder))
      sort = new Sort(...resultOrder);
    else
      sort = new Sort(resultOrder);
    return sort;

  }
}
export interface SortSegment {
  field: FieldDefinitions,
  isDescending?: boolean
}

class sortHelper implements SortSegment {
  constructor(public field: FieldDefinitions, public isDescending = false) {

  }
  descending(): SortSegment {
    return new sortHelper(this.field, !this.isDescending);
  }
}