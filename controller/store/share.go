package store

import (
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
)

type Share struct {
	Model
	EnvironmentId        int
	ZId                  string
	Token                string
	ShareMode            string
	BackendMode          string
	FrontendSelection    *string
	FrontendEndpoint     *string
	BackendProxyEndpoint *string
	Reserved             bool
	Deleted              bool
}

func (str *Store) CreateShare(envId int, shr *Share, tx *sqlx.Tx) (int, error) {
	stmt, err := tx.Prepare("insert into shares (environment_id, z_id, token, share_mode, backend_mode, frontend_selection, frontend_endpoint, backend_proxy_endpoint, reserved) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning id")
	if err != nil {
		return 0, errors.Wrap(err, "error preparing shares insert statement")
	}
	var id int
	if err := stmt.QueryRow(envId, shr.ZId, shr.Token, shr.ShareMode, shr.BackendMode, shr.FrontendSelection, shr.FrontendEndpoint, shr.BackendProxyEndpoint, shr.Reserved).Scan(&id); err != nil {
		return 0, errors.Wrap(err, "error executing shares insert statement")
	}
	return id, nil
}

func (str *Store) GetShare(id int, tx *sqlx.Tx) (*Share, error) {
	shr := &Share{}
	if err := tx.QueryRowx("select * from shares where id = $1", id).StructScan(shr); err != nil {
		return nil, errors.Wrap(err, "error selecting share by id")
	}
	return shr, nil
}

func (str *Store) FindAllShares(tx *sqlx.Tx) ([]*Share, error) {
	rows, err := tx.Queryx("select * from shares where not deleted order by id")
	if err != nil {
		return nil, errors.Wrap(err, "error selecting all shares")
	}
	var shrs []*Share
	for rows.Next() {
		shr := &Share{}
		if err := rows.StructScan(shr); err != nil {
			return nil, errors.Wrap(err, "error scanning share")
		}
		shrs = append(shrs, shr)
	}
	return shrs, nil
}

func (str *Store) FindShareWithToken(shrToken string, tx *sqlx.Tx) (*Share, error) {
	shr := &Share{}
	if err := tx.QueryRowx("select * from shares where token = $1 and not deleted", shrToken).StructScan(shr); err != nil {
		return nil, errors.Wrap(err, "error selecting share by token")
	}
	return shr, nil
}

func (str *Store) FindShareWithZIdAndDeleted(zId string, tx *sqlx.Tx) (*Share, error) {
	shr := &Share{}
	if err := tx.QueryRowx("select * from shares where z_id = $1", zId).StructScan(shr); err != nil {
		return nil, errors.Wrap(err, "error selecting share by z_id")
	}
	return shr, nil
}

func (str *Store) FindSharesForEnvironment(envId int, tx *sqlx.Tx) ([]*Share, error) {
	rows, err := tx.Queryx("select shares.* from shares where environment_id = $1 and not deleted", envId)
	if err != nil {
		return nil, errors.Wrap(err, "error selecting shares by environment id")
	}
	var shrs []*Share
	for rows.Next() {
		shr := &Share{}
		if err := rows.StructScan(shr); err != nil {
			return nil, errors.Wrap(err, "error scanning share")
		}
		shrs = append(shrs, shr)
	}
	return shrs, nil
}

func (str *Store) UpdateShare(shr *Share, tx *sqlx.Tx) error {
	sql := "update shares set z_id = $1, token = $2, share_mode = $3, backend_mode = $4, frontend_selection = $5, frontend_endpoint = $6, backend_proxy_endpoint = $7, reserved = $8, updated_at = current_timestamp where id = $9"
	stmt, err := tx.Prepare(sql)
	if err != nil {
		return errors.Wrap(err, "error preparing shares update statement")
	}
	_, err = stmt.Exec(shr.ZId, shr.Token, shr.ShareMode, shr.BackendMode, shr.FrontendSelection, shr.FrontendEndpoint, shr.BackendProxyEndpoint, shr.Reserved, shr.Id)
	if err != nil {
		return errors.Wrap(err, "error executing shares update statement")
	}
	return nil
}

func (str *Store) DeleteShare(id int, tx *sqlx.Tx) error {
	stmt, err := tx.Prepare("update shares set updated_at = current_timestamp, deleted = true where id = $1")
	if err != nil {
		return errors.Wrap(err, "error preparing shares delete statement")
	}
	_, err = stmt.Exec(id)
	if err != nil {
		return errors.Wrap(err, "error executing shares delete statement")
	}
	return nil
}
